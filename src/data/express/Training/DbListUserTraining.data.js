export class DbListUserTraining {
    constructor({ exercicioRepository }) {
        this.exercicioRepository = exercicioRepository;
    }

    async execute(Data) {
        const { userID } = Data;

        const treinos = [
            {
                description: 'Treino A: Peito e triceps',
                resume:
                    'Treino focado na porcão superior do peitoral e triceps braquial',
                steps: [
                    {
                        title: 'Aquecimento',
                        description:
                            'bike, caminhada ou exercícios de mobilidade',
                        series: '0',
                        repeticoes: '0',
                        intervalo: '0s',
                        linkVideo: '',
                    },
                    {
                        title: 'Avanço no smith',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Leg Press 45',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Agachamento com barra frontal',
                        description:
                            'bike, caminhada ou exercícios de mobilidade',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Leg Press horizontal',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Mesa flexora',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Elevação pélvica unilateral',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                ],
            },
            {
                description: 'Treino B: Peito e triceps',
                resume:
                    'Treino focado na porcão superior do peitoral e triceps braquial',
                steps: [
                    {
                        title: 'Aquecimento',
                        description:
                            'bike, caminhada ou exercícios de mobilidade',
                        series: '0',
                        repeticoes: '0',
                        intervalo: '0s',
                        linkVideo: '',
                    },
                    {
                        title: 'Avanço no smith',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Leg Press 45',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Agachamento com barra frontal',
                        description:
                            'bike, caminhada ou exercícios de mobilidade',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Leg Press horizontal',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Mesa flexora',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Elevação pélvica unilateral',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                ],
            },
            {
                description: 'Treino C: Peito e triceps',
                resume:
                    'Treino focado na porcão superior do peitoral e triceps braquial',
                steps: [
                    {
                        title: 'Aquecimento',
                        description:
                            'bike, caminhada ou exercícios de mobilidade',
                        series: '0',
                        repeticoes: '0',
                        intervalo: '0s',
                        linkVideo: '',
                    },
                    {
                        title: 'Avanço no smith',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Leg Press 45',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Agachamento com barra frontal',
                        description:
                            'bike, caminhada ou exercícios de mobilidade',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Leg Press horizontal',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Mesa flexora',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Elevação pélvica unilateral',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                ],
            },
            {
                description: 'Treino D: Peito e triceps',
                resume:
                    'Treino focado na porcão superior do peitoral e triceps braquial',
                steps: [
                    {
                        title: 'Aquecimento',
                        description:
                            'bike, caminhada ou exercícios de mobilidade',
                        series: '0',
                        repeticoes: '0',
                        intervalo: '0s',
                        linkVideo: '',
                    },
                    {
                        title: 'Avanço no smith',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Leg Press 45',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Agachamento com barra frontal',
                        description:
                            'bike, caminhada ou exercícios de mobilidade',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Leg Press horizontal',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Mesa flexora',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Elevação pélvica unilateral',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                ],
            },
            {
                description: 'Treino E: Peito e triceps',
                resume:
                    'Treino focado na porcão superior do peitoral e triceps braquial',
                steps: [
                    {
                        title: 'Aquecimento',
                        description:
                            'bike, caminhada ou exercícios de mobilidade',
                        series: '0',
                        repeticoes: '0',
                        intervalo: '0s',
                        linkVideo: '',
                    },
                    {
                        title: 'Avanço no smith',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Leg Press 45',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Agachamento com barra frontal',
                        description:
                            'bike, caminhada ou exercícios de mobilidade',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Leg Press horizontal',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Mesa flexora',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Elevação pélvica unilateral',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                ],
            },
            {
                description: 'Treino F: Peito e triceps',
                resume:
                    'Treino focado na porcão superior do peitoral e triceps braquial',
                steps: [
                    {
                        title: 'Aquecimento',
                        description:
                            'bike, caminhada ou exercícios de mobilidade',
                        series: '0',
                        repeticoes: '0',
                        intervalo: '0s',
                        linkVideo: '',
                    },
                    {
                        title: 'Avanço no smith',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Leg Press 45',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Agachamento com barra frontal',
                        description:
                            'bike, caminhada ou exercícios de mobilidade',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Leg Press horizontal',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Mesa flexora',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Elevação pélvica unilateral',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                ],
            },
            {
                description: 'Treino G: Peito e triceps',
                resume:
                    'Treino focado na porcão superior do peitoral e triceps braquial',
                steps: [
                    {
                        title: 'Aquecimento',
                        description:
                            'bike, caminhada ou exercícios de mobilidade',
                        series: '0',
                        repeticoes: '0',
                        intervalo: '0s',
                        linkVideo: '',
                    },
                    {
                        title: 'Avanço no smith',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Leg Press 45',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Agachamento com barra frontal',
                        description:
                            'bike, caminhada ou exercícios de mobilidade',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Leg Press horizontal',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Mesa flexora',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                    {
                        title: 'Elevação pélvica unilateral',
                        description: '',
                        series: '4',
                        repeticoes: '12-15',
                        intervalo: '60s',
                        linkVideo: 'http://',
                    },
                ],
            },
        ];

        return {
            treinos,
        };
    }
}
