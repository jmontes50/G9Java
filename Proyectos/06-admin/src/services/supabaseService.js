import supabase from "../config/supabaseConfig";

const uploadFile = async (file) => {
  //.from(nombre_del_bucket)
  try {
    const { data, error } = await supabase.storage.from('products').upload('1', file);
    if(error){
      console.log(error);
      throw error
    }else{
      console.log("Exito subiendo!!", data);
    }
  } catch (error) {
    throw error
  }
  
}

export {
  uploadFile
}