const newFormHandler = async (event) => {
    event.preventDefault();

    const company_name = document.querySelector("#company_name");
    const job_title = document.querySelector("#job_title");
    const role_dev_id = document.querySelector("#role");

    if(company_name && job_title && role_dev_id) {
        const response = await fetch(`/api/jobs`, {
            method: 'POST',
            body: JSON.stringify({company_name, job_title, role_dev_id }),
            headeres: {
                'content-Type': 'application/json'
            }
        });
        if(response.ok) {
            document.location.replace('./profile')
        } else {
            alert('Failed to Post a job')
        }
    }
};
document.querySelector('.new-form').addEventListener('click', newFormHandler)
