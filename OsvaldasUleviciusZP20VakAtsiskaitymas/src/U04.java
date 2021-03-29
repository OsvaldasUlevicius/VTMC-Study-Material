import java.util.Scanner;

public class U04 {

	public static void main(String[] args) {
		Scanner reader = new Scanner(System.in);
		System.out.print("Iveskite intervalo pradzia: ");
		int intervalStart = reader.nextInt();
		System.out.print("Iveskite intervalo pabaiga: ");
		int intervalEnd = reader.nextInt();

		int marskineliai = 0;
		for (int i = intervalStart; i <= intervalEnd; i++) {
			if (i % 6 == 0) {
				marskineliai++;
			}
		}
		System.out.println("Reikalingu marskineliu skaicius: " + marskineliai);

		reader.close();

	}

}
