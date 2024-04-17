import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules(req.params.cid);
    res.json(modules);
};

const createModule = async (req, res) => {
    const module = {...req.body, course: req.params.cid};
    const result = await dao.createModule(module);
    return res.json(result);
};

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
};

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
};


app.get("/api/courses/:cid/modules", findAllModules);
app.post("/api/courses/:cid/modules", createModule);
app.delete("/api/modules/:mid", deleteModule);
app.put("/api/modules/:mid", updateModule);

}