
public class TestAlgoritmaiOsvaldas {

	public static void main(String[] args) {
		int[] array = { 1, 2, 3, 4, 5, 6 };
		AlgoritmaiOsvaldas test = new AlgoritmaiOsvaldas();

		test.print(array);

		int[] array2 = { 6, 5, 4, 3, 2, 1 };
		test.print(array2);
		System.out.println("\nThe two arrays are equal: " + test.equals(array, array2));

		int[] array3 = { 6, 5, 4, 3, 2, 2, 5 };
		test.print(array);
		test.print(array3);
		System.out.println("\nThe two arrays are equal: " + test.equals(array, array3));

	}

}
