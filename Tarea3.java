class Tarea
{
    public static void main(String args[])
    {
        int valor1=1;
        int valor2=2;
        int iteraciones=1000;
        int auxiliar;

        System.out.println(valor1);
        System.out.println(valor2);

        while(valor1+valor2 <= iteraciones)
        {
            auxiliar = valor1;
            valor1 = valor2;
            valor2 = auxiliar + valor1;

            System.out.println(valor2);
        }
    }
}