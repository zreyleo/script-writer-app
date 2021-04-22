import uuid from 'react-uuid';

const firstConfigurationState = {
    turnOnDarkMode: true,
    form: '',
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
    characters: [],
    scene: {
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
    },
    author: 'Regynald Zambrano'
};

const initialState =
    JSON.parse(localStorage.getItem('savedState')) || firstConfigurationState;

export default initialState;
