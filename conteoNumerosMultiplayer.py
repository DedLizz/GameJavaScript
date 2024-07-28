import tkinter as tk
from tkinter import simpledialog, messagebox
import random


class Cancion:
    def __init__(self, titulo):
        pass
        #self.titulo = titulo

    def reproducir(self):
        pass
        #$print(f"Reproduciendo la canción: {self.titulo}")


def main():
    root = tk.Tk()
    root.withdraw()
    
    contador = 0
    turno = True
    azar = random.randint(1, 20)
    num_jugadores = simpledialog.askstring("Entrada", "Ingrese el número de jugadores")
    num_jugadores = int(num_jugadores)
    jugadores = []
    
    for i in range(num_jugadores):
        nombre_jugador = simpledialog.askstring("Entrada", f"Ingrese el nombre del concursante {i + 1}")
        jugadores.append(nombre_jugador)
        
    while turno:
        num_ingresado = simpledialog.askstring("Entrada", f"Turno de {jugadores[contador]}")
        num_ingresado = int(num_ingresado)
        if num_ingresado != azar:
            if num_ingresado > azar:
                messagebox.showinfo("Informacion", "El numero es mayor")
            else:
                messagebox.showinfo("Informacion", "El numero es menor")
            if contador < num_ingresado - 1 :
                contador += 1
            else:
                contador = 0
        else:
            messagebox.showinfo("Informacion", f"Ganaste {jugadores[contador]} -> El numero era {azar}")
            turno = False
        
        
    

if __name__ == "__main__":
    main()
