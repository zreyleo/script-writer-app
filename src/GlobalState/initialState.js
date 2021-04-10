import uuid from 'react-uuid';

const firstConfigurationState = {
    turnOnDarkMode: true,
    name: 'el perdon',
    screenplay: [
        {
            slugLine: '',
            sceneActions: [
                {
                    sceneDescription: '',
                    diaologues: [
                        {
                            character: '',
                            annotation: '',
                            line: ''
                        }
                    ]
                }
            ]
        }
    ],
    characters: [
        {
            name: '',
            role: '',
            shortDescription: '',
            longDescription: ''
        }
    ],
    author: 'Regynald Zambrano'
};

const initialState =
    localStorage.getItem('initialState') || firstConfigurationState;

export default initialState;
