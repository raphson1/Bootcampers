const newFormHandler = async (event) => {
    event.preventDefault();

    const company_name = document.querySelector("#company_name").value.trim();
    const job_title = document.querySelector("#job_title").value.trim();;
    // const role_dev_id = document.querySelector("#roles").value.trim();

    if(company_name && job_title ) {

        const response = await fetch('/api/jobs', {
            method: 'POST',
            body: JSON.stringify({company_name, job_title}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.ok) {
            console.log(response)
            alert('Job Posted!')
            document.location.replace('/allJobs/')
        } else {
            console.log(response)
            alert('Failed to Post a job')
        }
    }
};
document.querySelector('.new-job-form').addEventListener('submit', newFormHandler);
