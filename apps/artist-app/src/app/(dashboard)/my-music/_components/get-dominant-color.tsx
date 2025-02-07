export const getDominantColor = async (
  imageSrc: string,
  callback: (gradient: string) => void,
) => {
  const img = new Image();
  img.crossOrigin = "Anonymous"; // Handle cross-origin images
  img.src = imageSrc;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) return;

    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);

    const { data } = context.getImageData(0, 0, canvas.width, canvas.height);

    let r = 0,
      g = 0,
      b = 0,
      count = 0;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i]; // Red
      g += data[i + 1]; // Green
      b += data[i + 2]; // Blue
      count++;
    }



    r = Math.floor(r / count);
    g = Math.floor(g / count);
    b = Math.floor(b / count);

    // This generates a gradient with the dominant color
    const gradient = `linear-gradient(180deg, rgba(${r}, ${g}, ${b}, 1) 0%, #111 96.61%)`;
    callback(gradient);
  };
};
