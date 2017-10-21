
export let myModal = (form, header) => {
    return createModalShell(
         createModalHeader(header),
         createModalContent(form)
    // createModalData(data)*/

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

function createModalHeader(headerText){
    let header = document.createElement('div');
    let title = document.createElement('h3');
    let info = document.createElement('h4');

    // let span = document.createElement('span');
    // span.className = 'col-sm-2 glyphicon glyphicon-remove pull-right';

    header.className = 'modal-header';
    title.innerText = headerText['title'];
    info.innerText = headerText['info'];
    header.appendChild(title);
    header.appendChild(info);

    return header
}

// there need to be individual for each form this is for more data

