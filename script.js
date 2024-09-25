// Simple form submission handler
document.getElementById('grievance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you! Your grievance has been submitted.');
    this.reset();
});
