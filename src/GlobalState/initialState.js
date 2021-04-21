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
    localStorage.getItem('initialState') || firstConfigurationState;

export default initialState;
