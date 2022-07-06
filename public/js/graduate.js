
const newResumeHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const last_name = document.querySelector('#last_name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const resume = document.querySelector("#resume").value.trim();
    const dev_role = document.querySelector("#dev_role").value.trim();

    if(name && last_name && email && resume && dev_role ) {

        const response = await fetch('/api/applicant', {
            method: 'POST',
            body: JSON.stringify({resume, dev_role, name, last_name, email}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.ok) {
            console.log(response)
            alert('Resume Has Been Uploaded')
        } else {
            console.log(response)
            alert('Failed to Upload, review criteria')
        }
    }
};
document.querySelector('.new-resume-form').addEventListener('submit', newResumeHandler);

