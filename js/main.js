$(document).ready(function() {

    // Modal
    $("[data-modal]").click(function () {
        let modalId = $(this).attr("data-modal")

        openModal(modalId)
    })

    function openModal(modalId){
        $(`#${modalId}`).addClass("modal--active")
    }

    $(".modal").click(function () {
        closeModal()
    })

    $("._close-modal").click(function () {
        closeModal()
    })

    $(".modal__dialog").click(function (e) {
        e.stopPropagation()
    })


    function closeModal() {
        $('.modal').removeClass("modal--active")}

})
