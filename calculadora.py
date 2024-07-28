class Calculadora:
    def __init__(self, numero1, numero2):
        self.numero1 = numero1
        self.numero2 = numero2

    def sumar(self):
        return self.numero1 + self.numero2

def main():
    # Crear una instancia de Calculadora con dos números
    calculadora = Calculadora(5, 3)
    resultado = calculadora.sumar()
    print(f"La suma de los números es: {resultado}")

if __name__ == "__main__":
    main()
