import axios from 'axios';

export const mapCreate = async (req, res) => {
    const { content, depth } = req.body
    if (depth === 5) {
        return res.json({
            msg: "5 depth"
            , content
        })
    }
    else if (depth === 4) {
        return res.json({
            msg: "depth 4"
            , content
        })
    }

    else {
        return res.json({
            msg: "depth 3"
            , content
        })
    }
}