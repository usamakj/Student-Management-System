const Result = require("../models/Result"); //
const Student = require("../models/Student");

const getResults = async (req, res) => {
    try {
        const results = await Result.find().populate("student", "name email");
        res.json(results);
    } catch (error) {
        console.log("Server in not working", error);
        res.status(500).send("Server Error show");
    }
};

const getResultsById = async (req, res) => {
    try {
        const result = await Result.findById(req.params.id).populate(
            "student",
            "name email"
        );
        if (!result) {
            return res.status(400).json({ msg: "Result Not Found " });
        }
        res.json(result);
    } catch (error) {
        console.error(error.message);
        if (error.kind === "ObjectId") {
            return res.status(400).json({ msg: "Results Not Found" });
        }
        res.status(500).send("Server ma kuch Kharabi ha ");
    }
};


const createResult = async (req, res) => {
    try {
        const student = await Student.findById(req.body.student);  // ya check kara ga ki student already ha .
        if (!student) {
            return res.status.json({ msg: "Invalid Student " })
        }

        const newResult = new Result(req.body);
        await newResult.save();
        res.status(201).json(newResult);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server  may error agya hai ');
    }
};


const updateResult = async (req, res) => {
    try {
        const result = await Result.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValiddations: true,
        });
        if (!result) {
            return res.status(404).json({ msg: "Result Nahi Mil raha hai" })
        }
    } catch (error) {
        console.error(error.message);
        if (error.kind === "ObjectId") {
            return res.status(404).json({ msg: "Result Nahi Mil Raha hai" })
        }
        res.status(500).send('server ma error agya hai ')

    }
}

const deleteResult = async (req, res) => {
    try {
        const result = await Result.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ msg: "Result Not Found" })
        }
        res.json({ msg: "Result Delete Ho gya Hai" });
    } catch (error) {
        consolo.error(error.message);
        if (error.kind === "ObjectId") {
            return res.status(404).json({ msg: "Result Not Found " })
        }
        res.status(500).send('Server ma error araha hai');

    }
}

module.exports = {
    getResults,
    getResultsById,
    createResult,
    updateResult,
    deleteResult,
};