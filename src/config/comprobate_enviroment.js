export const checkPort = (port, url, key) => {
  if (!port || port.trim() === "") {
    console.error("La variable de entorno PORT no esta completa o no existe");
    process.exit(1);
  }

  if (!url || url.trim() === "") {
    console.error(
      "la variable de entorno DATABASE_URL no esta completa o no existe"
    );
    process.exit(1);
  }

  if (!key || key.trim() === "") {
    console.error(
      "la variable de entorno JWT_ACCESS_SECRET no esta completa o no existe"
    );
    process.exit(1);
  }
};
