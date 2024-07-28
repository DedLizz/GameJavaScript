# canción.py

class Cancion:
    def __init__(self, titulo):
        self.titulo = titulo

    def reproducir(self):
        print(f"Reproduciendo la canción: {self.titulo}")

def main():
    # Crear una instancia de Cancion
    mi_cancion = Cancion("Mi canción favorita")
    mi_cancion.reproducir()

if __name__ == "__main__":
    main()
