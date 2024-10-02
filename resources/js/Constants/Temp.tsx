// **All CONSTANTS IN THIS FILE IS FOR REPLACING SERVER RESPONSE**

// TODO: Move all menus to RoleMenu.tsx

export const MCRMenus = [
    {
        link: '/',
        label: 'Dashboard'
    },
    {
        link: '/validation',
        label: 'Perlu Validasi'
    },
    {
        link: '/program',
        label: 'Program'
    },
    {
        link: '/message',
        label: 'Pesan Masuk'
    },
]

export const ProducerMenus = [
    {
        link: '/new-program',
        label: 'Program Baru'
    },
    {
        link: '/validation',
        label: 'Perlu Validasi'
    },
    {
        link: '/message',
        label: 'Pesan Masuk'
    },
]

export const AdminMenus = [
    {
        link: '/new-users',
        label: 'User Baru'
    },
    {
        link: '/users',
        label: 'User'
    }
]

export const MessageData = [
    {
        id: 1,
        programTitle: 'Insightful Lectures',
        programEpisode: 3,
        sender: 'Ardhito Pramono',
        senderRole: 'Produser',
        message: 'Hi! Untuk pengambilan video dari atas, pastikan kamera stabil dan fokus pada detail penting. Perhatikan sudut pengambilan yang menarik dan pastikan pencahayaan memadai. Jangan lupa untuk memastikan keamanan alat saat pengambilan dari ketinggian. Terima kasih!'
    },
    {
        id: 2,
        programTitle: 'Insightful Lectures',
        programEpisode: 3,
        sender: 'Ardhito Pramono',
        senderRole: 'Produser',
        message: 'Hi! Untuk pengambilan video dari atas, pastikan kamera stabil dan fokus pada detail penting. Perhatikan sudut pengambilan yang menarik dan pastikan pencahayaan memadai. Jangan lupa untuk memastikan keamanan alat saat pengambilan dari ketinggian. Terima kasih!'
    },
    {
        id: 3,
        programTitle: 'Insightful Lectures',
        programEpisode: 3,
        sender: 'Ardhito Pramono',
        senderRole: 'Produser',
        message: 'Hi! Untuk pengambilan video dari atas, pastikan kamera stabil dan fokus pada detail penting. Perhatikan sudut pengambilan yang menarik dan pastikan pencahayaan memadai. Jangan lupa untuk memastikan keamanan alat saat pengambilan dari ketinggian. Terima kasih!'
    },
    {
        id: 4,
        programTitle: 'Insightful Lectures',
        programEpisode: 3,
        sender: 'Ardhito Pramono',
        senderRole: 'Produser',
        message: 'Hi! Untuk pengambilan video dari atas, pastikan kamera stabil dan fokus pada detail penting. Perhatikan sudut pengambilan yang menarik dan pastikan pencahayaan memadai. Jangan lupa untuk memastikan keamanan alat saat pengambilan dari ketinggian. Terima kasih!'
    },
]


export const EditoProgram = [
    {
        id: 1,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 2,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 3,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: false
    },
    {
        id: 4,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Buat test doang',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                ]
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                ]
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'buat-test-doang',
        uploadStatus: false
    },
    {
        id: 5,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 6,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 7,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 8,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'no 6',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ]
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'no-6',
        uploadStatus: true
    },
]


export const MCRProgram = [
    {
        id: 1,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: false,
                airingStatus: 'On Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 2,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 3,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: false,
        programStatus: 'Aktif'
    },
    {
        id: 4,
        status: 'Tidak Aktif',
        code: 'UNIV1001',
        title: 'Buat test doang',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: false,
                airingStatus: 'On Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'buat-test-doang',
        uploadStatus: false
    },
    {
        id: 5,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 6,
        status: 'Tidak Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 7,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 8,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'no 6',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'Off Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'Off Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'no-6',
        uploadStatus: true
    },
]


export const ProducerProgram = [
    {
        id: 1,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: false,
                airingStatus: 'On Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 2,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 3,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: false,
        programStatus: 'Aktif'
    },
    {
        id: 4,
        status: 'Tidak Aktif',
        code: 'UNIV1001',
        title: 'Buat test doang',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: false,
                airingStatus: 'On Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'buat-test-doang',
        uploadStatus: false
    },
    {
        id: 5,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 6,
        status: 'Tidak Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 7,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'Insightful Lectures',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'insightful-lectures',
        uploadStatus: true
    },
    {
        id: 8,
        status: 'Aktif',
        code: 'UNIV1001',
        title: 'no 6',
        duration: '30 Menit',
        episode: [
            {
                episodeNumber: 1,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-thumbnail.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'On Air',
                productionStatus: 'Shooting'
            },
            {
                episodeNumber: 2,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'Off Air',
                productionStatus: 'Validasi QC MCR'
            },
            {
                episodeNumber: 3,
                code: 'UNIV1001',
                theme: 'education',
                productionDate: '24/01/2024',
                desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya.',
                thumbnail: '/image/program-error.jpg',
                duration: '30 Minute',
                segmen: [
                    {
                        segmentNumber: 1,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 2,
                        preview: '/image/program-thumbnail.jpg'
                    },
                    {
                        segmentNumber: 3,
                        preview: '/image/program-thumbnail.jpg'
                    }
                ],
                validationStatus: true,
                airingStatus: 'Off Air',
                productionStatus: 'Validasi Produser'
            },
        ],
        members: [
            {
                name: 'Erik Johansson',
                role: 'Producer'
            },
            {
                name: 'Sophia Muller',
                role: 'Cameraman'
            },
            {
                name: 'Luca Rossi',
                role: 'Editor'
            },
            {
                name: 'Emilia Andersson',
                role: 'Editor'
            },
            {
                name: 'Isabella Fischer',
                role: 'MCR'
            },
            {
                name: 'Jonas van der Berg',
                role: 'MCR'
            }
        ],
        desc: 'Insightful Lectures adalah sebuah program video yang menghadirkan serangkaian kuliah inspiratif yang bertujuan untuk memberikan wawasan mendalam kepada penontonnya. Dalam setiap episode, para pembicara yang ahli di bidangnya berbagi pengalaman, pengetahuan, dan pemikiran inspiratif mereka, menciptakan suasana yang merangsang pemikiran dan memotivasi. Tema kuliah-kuliah tersebut melibatkan berbagai aspek kehidupan, mulai dari perkembangan pribadi, inovasi dalam karier, hingga konsep-konsep filosofis yang dapat menginspirasi dan membimbing penonton menuju pemahaman yang lebih mendalam tentang diri mereka dan dunia sekitar. Insightful Lectures menjadi sumber daya berharga bagi mereka yang mencari motivasi dan kebijaksanaan dari para pemikir ulung dalam berbagai bidang kehidupan.',
        premiere: 'Senin, 15 Agustus 2023 18:10',
        slug: 'no-6',
        uploadStatus: true
    },
]

export const UsersData = [
    {
        id: 1,
        name: 'John Doe',
        role: 'Cameraman',
        email: 'johndoe@example.com',
        phone: '081234567890',
        status: 'new'
      },
      {
        id: 2,
        name: 'Jane Smith',
        role: 'Director',
        email: 'janesmith@example.com',
        phone: '081234567890',
        status: 'new'
      },
      {
        id: 3,
        name: 'Michael Johnson',
        role: 'Producer',
        email: 'michaeljohnson@example.com',
        phone: '081234567890',
        status: 'new'
      },
      {
        id: 4,
        name: 'Emily Davis',
        role: 'Producer',
        email: 'michaeljohnson@example.com',
        phone: '081234567890',
        status: 'accepted'
      },
      {
        id: 5,
        name: 'David Wilson',
        role: 'Sound Engineer',
        email: 'davidwilson@example.com',
        phone: '081234567890',
        status: 'accepted'
      }
]
