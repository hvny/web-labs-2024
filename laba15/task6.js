const initialArr = [
    {
        model: "Bert",
        architecture: "encoder",
        application: ["classification", "masked prediction", "embedding"]
    },
    {
        model: "GPT",
        architecture: "decoder",
        application: ["text generation", "question answering", "instructed sgeneration", "classification"]
    },
    {
        model: "T5",
        architecture: "encoder-decoder",
        application: ["classification", "summarization", "question answering"]
    }
];

const resultSet = new Set();

function getApplicationValues() {
    initialArr.forEach((elem) => {
        elem["application"].forEach((app) => {
            resultSet.add(app);
        });
    });
}

getApplicationValues();

const resultArr = Array.from(resultSet);

console.log(resultArr);