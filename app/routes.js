//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// This is routing from do you have a pet question
router.post('/what-is-your-pets-name', function(request, response) {
    var petResponse = request.session.data['have-pet']
    if (petResponse == "No") {
        response.redirect('/check-your-answers')
    } else {
        response.redirect('what-is-your-pets-name')
    }
})

// *********
// This is for another routing
// *********
