import java.util.Scanner;

public class U02 {

	public static void main(String[] args) {
		Scanner reader = new Scanner(System.in);
		System.out.print("Iveskite deziu skaiciu: ");
		int dezes = reader.nextInt();
		System.out.print("Iveskite knygu skaiciu: ");
		int knygos = reader.nextInt();
		System.out.print("Iveskite kelios knygos telpa i deze: ");
		int talpa = reader.nextInt();

		if (talpa * dezes > knygos) {
			System.out.println("Knygos telpa i dezes.");
		} else {
			System.out.println(
					"Knygos netelpa i dezes.\nI dezes netilpo " + (knygos - (talpa * dezes)) + " knygos/-a/-u.");
		}

		reader.close();

	}

}
