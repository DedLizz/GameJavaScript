import java.util.Random;

import javax.swing.JOptionPane;

public class conteoNumerosMultiplayer {
    
    public static void main(String[] args) {
        boolean turno = true;
        int conta = 0;
        Random rand = new Random();
        int azar = rand.nextInt(20)+1;

        String input = JOptionPane.showInputDialog("Ingrese el numero de participantes");
        int num_participantes = Integer.parseInt(input);

        String[] participantes = new String[num_participantes];

        for (int i = 0; i < num_participantes; i++) {
            participantes[i] = JOptionPane.showInputDialog("Ingrese el nombre del participantel:"+(i+1));
        }

        while(turno) {
            int num_ingresado = Integer.parseInt(JOptionPane.showInputDialog( "Turno de " + participantes[conta]));
            if(num_ingresado != azar ){
                if(num_ingresado > azar){
                    JOptionPane.showMessageDialog(null, "el numero ingresado es mayor");
                } else {
                    JOptionPane.showMessageDialog(null, "el numero ingresado es menor");
                }
                if(conta < num_participantes - 1){
                    conta++;
                } else {
                    conta = 0;
                }
            } else {
                JOptionPane.showMessageDialog(null, "El ganador es "+participantes[conta]+" El numero era "+azar);
                turno = false;
            }

        }

    }
}