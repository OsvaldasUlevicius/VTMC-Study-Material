import java.util.Scanner;

public class U05 {

	public static void main(String[] args) {
		Scanner reader = new Scanner(System.in);
		System.out.print("Iveskite pirmo vaziavimo ivertinima: ");
		int ivertinimas1 = reader.nextInt();
		System.out.print("Iveskite antro vaziavimo ivertinima: ");
		int ivertinimas2 = reader.nextInt();
		System.out.print("Iveskite trecio vaziavimo ivertinima: ");
		int ivertinimas3 = reader.nextInt();
		reader.close();

		System.out.println(
				"Geriausias ivertinimas: " + gautiGeriausiaIvertinima(ivertinimas1, ivertinimas2, ivertinimas3));

	}

	private static int gautiGeriausiaIvertinima(int ivertinimas1, int ivertinimas2, int ivertinimas3) {
		return Math.max(ivertinimas1, Math.max(ivertinimas2, ivertinimas3));
	}
}
