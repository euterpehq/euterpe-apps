

export default function CoverImage() {
  return (
    <>
                <p className="mt-6">Cover Image</p>

    <div className="flex justify-start gap-x-16 mt-4 w-full ">
                    <div className="w-[400px] h-[200px] ">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-[400px] h-[200px] border border-dashed border-[#B8FF5B1A] rounded-lg cursor-pointer bg-[#1E1E1E] hover:bg-muted/25">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="text-center mb-2 text-sm text-primary">Select an Image</p>
                                <p className="text-center text-xs text-[#868B9F]">Or drag image here to upload</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div> 
                    
                    <div>
                    <p className="text-xl">Optimal Characteristics</p>
                    <ul className="ms-5 text-[#868B9F] list-disc">
                      <li>.jpg, .png, or .gif file extensions</li>
                      <li>Perfect square</li>
                      <li>3000 x 3000 pixels resolution</li>
                    </ul>
                    </div>
                </div>
    </>
  )
}
