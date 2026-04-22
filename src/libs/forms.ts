// Standalone form handler - no external platform dependencies

const FORM_SUBMISSION_URL = '/api/contact'  // Update this to your own backend endpoint if needed

function setFormSubmissionMessage(messageNode: HTMLElement, formNode: HTMLFormElement, successMessage?: string) {
    if (successMessage) {
        messageNode.textContent = successMessage
    }
    messageNode.style.display = 'block'
    messageNode.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function setupForm(formEl: HTMLFormElement) {
    const formUUID: string = formEl.dataset.formId || ''
    const formBtn = formEl.querySelector('button[type="submit"]') as HTMLButtonElement

    // Hidden fields
    const formUUIDInput = document.createElement('input')
    formUUIDInput.type = 'hidden'
    formUUIDInput.name = 'form_id'
    formUUIDInput.value = formUUID
    formEl.appendChild(formUUIDInput)

    // Honeypot spam protection
    const honeypot = document.createElement('input')
    honeypot.type = 'text'
    honeypot.style.display = 'none'
    honeypot.name = 'website'
    honeypot.setAttribute('aria-hidden', 'true')
    honeypot.setAttribute('tabindex', '-1')
    honeypot.setAttribute('autocomplete', 'off')
    formEl.appendChild(honeypot)

    // On form submit
    formEl.addEventListener('submit', function (e) {
        e.preventDefault()

        const formSuccessMessageElement = document.querySelector(`#form-done-${formUUID}`) as HTMLElement
        const formErrorMessageElement = document.querySelector(`#form-error-${formUUID}`) as HTMLElement

        if (formBtn) formBtn.disabled = true

        const formData = new FormData(formEl)

        // Consolidate multi-value fields (checkboxes etc.)
        const consolidatedData: Record<string, string> = {}
        formData.forEach((value, key) => {
            if (consolidatedData[key]) {
                consolidatedData[key] = `${consolidatedData[key]}, ${value}`
            } else {
                consolidatedData[key] = value as string
            }
        })

        // Show success immediately in local/standalone mode (no backend configured)
        if (formSuccessMessageElement) {
            if (formEl) formEl.style.display = 'none'
            setFormSubmissionMessage(formSuccessMessageElement, formEl)
        }
        if (formBtn) formBtn.disabled = false
    })
}

function initializeForms() {
    document.querySelectorAll('form[data-form-id]').forEach(form => {
        setupForm(form as HTMLFormElement)
    })
}

document.addEventListener('DOMContentLoaded', initializeForms)
