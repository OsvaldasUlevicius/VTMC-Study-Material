import java.util.Scanner;

public class U01 {

	public static void main(String[] args) {
		Scanner reader = new Scanner(System.in);
		System.out.print("Kiek pamoku yra pirmadieni?: ");
		int pirmadienis = reader.nextInt();
		System.out.print("Kiek pamoku yra antradieni?: ");
		int antradienis = reader.nextInt();
		System.out.print("Kiek pamoku yra treciadieni?: ");
		int treciadienis = reader.nextInt();
		System.out.print("Kiek pamoku yra ketvirtadieni?: ");
		int ketvirtadienis = reader.nextInt();
		System.out.print("Kiek pamoku yra penktadieni?: ");
		int penktadienis = reader.nextInt();

		int total = pirmadienis + antradienis + treciadienis + ketvirtadienis + penktadienis;
		System.out.println("Pamoku skaicius: " + total);
		System.out.println("Tai sudaro minuciu: " + total * 45);
		reader.close();
	}

}
