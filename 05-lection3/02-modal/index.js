(function () {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.overflow = 'initial';
    });
})();

(function () {
    const openButton = document.getElementById('modal-form-open');
    const closeButton = document.getElementById('modal-form-close');
    const dialog = document.getElementById('modal-form');

    if (!openButton || !closeButton || !dialog) {
        return;
    }

    openButton.addEventListener('click', () => {
        dialog.showModal();
    });

    closeButton.addEventListener('click', () => {
        dialog.close();
    });
})();
