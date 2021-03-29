
public class U03 {

	public static void main(String[] args) {
		int intervalStart = -100;
		for (int i = intervalStart; i > -200; i = i - 3) {
			System.out.print(i + " ");
		}
		System.out.println("");
		int counter = intervalStart;
		while (counter > -200) {
			System.out.print(counter + " ");
			counter = counter - 3;
		}

	}

}
