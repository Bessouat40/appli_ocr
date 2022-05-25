from typing import Optional
from fastapi import FastAPI, File, UploadFile
import uvicorn
from ocr import *

app = FastAPI()


@app.post("/file")
async def read_root(file : str):
    ocr = OCR()

    ocr.initialise_tesseract_chemin()
    ocr.saisir_chemin(file)
    text = ocr.extract_text()
    return {'texte':text}

if __name__ == '__main__' :
    uvicorn.run("API:app", port=5000, reload=True, access_log=False)