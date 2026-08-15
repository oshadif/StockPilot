import {pool} from "../db.js";
export function audit(action,entityType,idResolver=()=>null){
 return (req,res,next)=>{
  const original=res.json.bind(res);let body;
  res.json=(x)=>{body=x;return original(x)};
  res.on("finish",async()=>{
   if(res.statusCode>=400)return;
   try{await pool.query(`INSERT INTO audit_logs (warehouse_id,user_id,action,entity_type,entity_id,method,path,ip_address,after_data) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`,[req.user?.warehouseId||null,req.user?.id||null,action,entityType,idResolver(req,body),req.method,req.originalUrl,req.ip,body?JSON.stringify(body):null]);}catch(e){console.error("Audit error",e)}
  });next();
 };
}
