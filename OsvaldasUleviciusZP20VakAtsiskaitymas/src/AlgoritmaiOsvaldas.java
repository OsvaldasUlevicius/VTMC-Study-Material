import java.util.Arrays;

public class AlgoritmaiOsvaldas {

	public static void print(int[] array) {
		System.out.print("[");
		for (int i = 0; i < array.length; i++) {
			if (i == array.length - 1) {
				System.out.print(array[i]);
			} else {
				System.out.print(array[i] + ", ");
			}
		}
		System.out.print("]");
	}

	public static boolean equals(int[] array1, int[] array2) {
		boolean equalLength = array1.length == array2.length;
		Arrays.sort(array1);
		Arrays.sort(array2);
		return equalLength && Arrays.equals(array1, array2);
	}

}