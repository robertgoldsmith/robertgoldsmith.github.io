let emailCollectorForm = document.getElementById("Email-Collector")
let mainContent = document.getElementById('Main-Content')

emailCollectorForm.addEventListener("submit", event => {
    // Stop the default event behavior
    event.preventDefault()
    // use FormData to get the User's name and email 
       
    let ourFormData = new FormData(event.target)
    
    let userFirstName = ourFormData.get('firstName')    
    let userEmailAddress = ourFormData.get('emailAddress')  
    // Create new content  
    let updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>
    
        <p>You're on your way to becoming a BBQ Master!</p>
        
        <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
    `
    //update the content
    mainContent.innerHTML = updatedHtmlContent
})