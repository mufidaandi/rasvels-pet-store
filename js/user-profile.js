function showEditableProfileDetails() {
    $('.personal-details .data-card').hide();
    $('.personal-details .editable-data-card').show();
}

function showEditablePassword() {
    $('.password-details .data-card').hide();
    $('.password-details .editable-data-card').show();
}

function hideEditableProfileDetails() {
    $('.personal-details .data-card').show();
    $('.personal-details .editable-data-card').hide();
}

function hideEditablePassword() {
    $('.password-details .data-card').show();
    $('.password-details .editable-data-card').hide();
}


$(document).ready(function() {
    hideEditableProfileDetails();
    hideEditablePassword();
    $('#cancel-info').click(hideEditableProfileDetails);
    $('#cancel-pword').click(hideEditablePassword);
    $('.data-edit').click(showEditableProfileDetails);
    $('.password-edit').click(showEditablePassword);
});