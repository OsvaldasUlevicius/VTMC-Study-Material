import java.util.Scanner;

public class U06 {

	public static void main(String[] args) {
		Scanner reader = new Scanner(System.in);
		System.out.print("Kiek kartu siandien mokesi Jonas anglu kalbos?: ");
		int n = reader.nextInt();

		int totalTime = 0;
		for (int i = 0; i < n; i++) {
			System.out.print("Iveskite periodo pradzios laiko valandas Aval: ");
			int aVal = reader.nextInt();
			System.out.print("Iveskite periodo pradzios laiko minutes Amin: ");
			int aMin = reader.nextInt();
			System.out.print("Iveskite periodo pabaigos laiko valandas Bval: ");
			int bVal = reader.nextInt();
			System.out.print("Iveskite periodo pabaigos laiko minutes Bmin: ");
			int bMin = reader.nextInt();
			totalTime += gautiTrukmeMinutemis(aVal, aMin, bVal, bMin);
		}
		gautiLaikoFormata(totalTime / 60, totalTime % 60);
		reader.close();

	}

	private static int gautiTrukmeMinutemis(int aVal, int aMin, int bVal, int bMin) {
		return (bVal - aVal) * 60 + (bMin - aMin);
	}

	private static void gautiLaikoFormata(int valandos, int minutes) {
		System.out.println(valandos + " val. " + minutes + " min.");
	}

}
