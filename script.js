const story = {
    start: {
        text: "Você está em seu quarto e encontra um relógio antigo no sótão. Ao tocá-lo, ele começa a brilhar...",
        choices: {
            1: "Explorar o sótão",
            2: "Mexer no relógio"
        },
        next: {
            1: "explorar",
            2: "mexer"
        }
    },
    explorar: {
        text: "Você explora o sótão e encontra uma porta secreta que leva a um portal. Você entra e é transportado para o Egito Antigo.",
        choices: {
            1: "Conversar com os habitantes locais",
            2: "Procurar por tesouros"
        },
        next: {
            1: "conversar",
            2: "procurar"
        }
    },
    mexer: {
        text: "Você mexe no relógio e é instantaneamente transportado para o ano de 3023, onde robôs dominam a Terra.",
        choices: {
            1: "Fugir dos robôs",
            2: "Tentar se comunicar com eles"
        },
        next: {
            1: "fugir",
            2: "comunicar"
        }
    },
    conversar: {
        text: "Você decide conversar com os habitantes locais. Eles acham você fascinante e o convidam para viver entre eles como um sábio vindo dos céus.",
        choices: {
            1: "Aceitar a oferta e viver no Egito Antigo",
            2: "Recusar e tentar voltar para o presente"
        },
        next: {
            1: "viverEgito",
            2: "voltarPresente"
        }
    },
    procurar: {
        text: "Você decide procurar por tesouros. Após horas explorando uma pirâmide, você ativa uma armadilha secreta!",
        choices: {
            1: "Tentar desativar a armadilha",
            2: "Correr para a saída"
        },
        next: {
            1: "desativarArmadilha",
            2: "corridaFinal"
        }
    },
    fugir: {
        text: "Você foge dos robôs e encontra um grupo de humanos rebeldes que ainda resistem. Eles pedem sua ajuda para destruir o núcleo central dos robôs.",
        choices: {
            1: "Ajudar os rebeldes",
            2: "Fugir sozinho para tentar voltar ao seu tempo"
        },
        next: {
            1: "ajudarRebeldes",
            2: "fugirSozinho"
        }
    },
    comunicar: {
        text: "Você tenta se comunicar com os robôs. Eles reconhecem você como uma entidade diferente e pedem que você se junte a eles como um embaixador entre humanos e máquinas.",
        choices: {
            1: "Aceitar a oferta e se tornar um embaixador",
            2: "Recusar e tentar fugir"
        },
        next: {
            1: "embaixador",
            2: "fugirSozinho"
        }
    },
    // Finais da história
    viverEgito: {
        text: "Você decide viver no Egito Antigo. Com o tempo, você se torna um sábio reverenciado, contando histórias sobre o futuro e ajudando a moldar a cultura local. Seu nome é gravado nos hieróglifos como um grande conselheiro de faraós. Fim.",
        choices: {}
    },
    voltarPresente: {
        text: "Você recusa a oferta dos habitantes locais e, com algum esforço, encontra o portal de volta. Ao retornar ao presente, o relógio para de brilhar, e você percebe que foi uma aventura única que nunca poderá ser repetida. Fim.",
        choices: {}
    },
    desativarArmadilha: {
        text: "Você desativa a armadilha com sucesso e encontra um enorme tesouro escondido! Você vive o resto de seus dias como um arqueólogo milionário, conhecido por suas descobertas. Fim.",
        choices: {}
    },
    corridaFinal: {
        text: "Você corre para a saída, mas a armadilha é ativada e a pirâmide começa a desmoronar. Felizmente, você consegue escapar por pouco, mas fica com um novo respeito pelos mistérios do passado. Fim.",
        choices: {}
    },
    ajudarRebeldes: {
        text: "Você decide ajudar os rebeldes. Com seu conhecimento do presente, vocês conseguem destruir o núcleo central dos robôs e libertar a Terra. Você é celebrado como um herói por gerações. Fim.",
        choices: {}
    },
    fugirSozinho: {
        text: "Você decide fugir sozinho. Após uma longa perseguição, você finalmente encontra um meio de voltar ao seu tempo. A experiência o deixa com uma profunda reflexão sobre o futuro da humanidade. Fim.",
        choices: {}
    },
    embaixador: {
        text: "Você aceita ser um embaixador entre humanos e robôs. A paz entre as espécies é selada e você se torna uma figura histórica que une dois mundos. Fim.",
        choices: {}
    }
};

let currentScene = "start";

function makeChoice(choice) {
    const scene = story[currentScene];
    const nextScene = scene.next[choice];
    
    if (nextScene) {
        currentScene = nextScene;
        updateStory();
    }
}

function updateStory() {
    const scene = story[currentScene];
    const storyText = document.getElementById("story-text");
    const choicesDiv = document.getElementById("choices");

    storyText.innerText = scene.text;
    choicesDiv.innerHTML = '';

    for (const [key, value] of Object.entries(scene.choices)) {
        const button = document.createElement("button");
        button.innerText = value;
        button.onclick = () => makeChoice(key);
        choicesDiv.appendChild(button);
    }
}

updateStory(); // Inicializa a história
