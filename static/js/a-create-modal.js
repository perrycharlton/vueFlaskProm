
export let myModal = (form, header) => {
    return createModalShell(
         header,
         createModalContent(form)
     );
};

function createModalShell (header, container) {
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('id', 'myModal');
    let wrapper = document.createElement('div');
    wrapper.className = 'modal-wrapper';
    wrapper.appendChild(header);
    wrapper.appendChild(container);
    modal.appendChild(wrapper);
    return modal;
}

// This is for modal data that can be edited
function createModalContent (formData){
    let modalCont = document.createElement('div');
    modalCont.className = 'modal-content';
    modalCont.appendChild(createModalFormData(formData));
    console.log('button clicked');
    return modalCont
}

// This is for form data that can be edited
function createModalFormData(formData) {
    let form = document.createElement('form');
    let e_data = document.createElement('div');
    e_data.className = 'col-sm-8';
    e_data.className = 'form-group';
    e_data.appendChild(formData);
    form.appendChild(e_data);
    form.appendChild(createModalButtons());
    return form;
}

// This create standard save cancel Buttons
function createModalButtons() {
    let btnSave = document.createElement('button');
    let btnGroup = document.createElement('div');

    btnSave.setAttribute('type', 'button');
    btnSave.className = 'btn btn-default modal-btn pull-right';
    let btnCancel = btnSave.cloneNode(true);
    btnCancel.innerText = 'Cancel';
    btnSave.innerText = 'Save';

    btnGroup.setAttribute('class', 'btn-toolbar');
    btnGroup.appendChild(btnSave);
    btnGroup.appendChild(btnCancel);

    return btnGroup;
}



