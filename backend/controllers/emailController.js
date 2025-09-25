import Email from "../model/email.js";

export const addEmail = async(req, res) => {
    try {
        const newEmailData = req.body;
        const createdEmail = await Email.create(newEmailData)
        if (createdEmail) {
            return res.status(200).json({
                message: "Email subscription successful",
                success: true,
                data: createdEmail
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "Email subscription failed"
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Try again later, something went wrong"
        })

    }
}