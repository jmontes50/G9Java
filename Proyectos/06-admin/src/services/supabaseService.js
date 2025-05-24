import supabase from "../config/supabaseConfig";
import { v4 as uuidv4 } from "uuid";

const BUCKET_NAME = 'products';

const uploadFile = async (file) => {
  //.from(nombre_del_bucket)
  try {
    const originalName = file.name.split('.'); // ["archivo","png"]
    const extension = originalName[originalName.length - 1]; //png

    const newFileName = uuidv4();

    const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(`${newFileName}.${extension}`, file);
    if(error){
      console.log(error);
      throw error
    }else{
      // console.log("Exito subiendo!!", data);}
      const fileUrlPublic = supabase.storage.from(BUCKET_NAME).getPublicUrl(data.path);
      // console.log( fileUrlPublic );
      return fileUrlPublic.data.publicUrl;
    }
  } catch (error) {
    throw error
  }
  
}

export {
  uploadFile
}