import java.util.ArrayList;

public class Main {

    public static String reverseString(String stringToReverse) {
        String returnString = "";
        for (int i = stringToReverse.length() - 1 ;i >= 0; i-- ) {
            returnString += stringToReverse.charAt(i);
        }
        return returnString;
    }

    public static String[] splitStatement(String stringToSplit) {
        String[] returnList = stringToSplit.split("\\s+");
        return returnList;
    }

    public static void main(String[] args) {
//        System.out.println(reverseString("Hello"));
        String[] printString = splitStatement("Hello how are you?");
        for (String word: printString) {
            System.out.println(word);
        }
    }
}