import checkNumInputs  from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');   
    checkNumInputs('#height');   

    function bindActionsToElems (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN':
                        // console.log('span');
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox') {
                            // console.log('checkbox');
                            i === 0 ? state[prop] = 'HOLODNO' : state[prop] = 'TEPLO';
                            elem.forEach ((box, j) => {
                                box.checked = false;
                                if (i ==j) {
                                    box.checked = true;
                                } 
                            });
                        } else {
                            // console.log('input');
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        // console.log('select');
                        state[prop] = item.value;
                        break;
                }

                console.log(state);

                // if (elem.length > 1) {
                //     state[prop] = i;
                // } else {
                //     state[prop] = item.value; 
                // }
                // // state[prop] = i;
                // console.log(state);
            });
        });
    
    }
    bindActionsToElems('click', windowForm, 'form');
    bindActionsToElems('input', windowHeight, 'height');
    bindActionsToElems('input', windowWidth, 'width');
    bindActionsToElems('change', windowType, 'type');
    bindActionsToElems('change', windowProfile, 'profile');

    // windowForm.forEach((item, i) => {
    //     item.addEventListener('click', () => {
    //         state.form = i;
    //         console.log(state);
    //     });
    // });

};

export default changeModalState;
