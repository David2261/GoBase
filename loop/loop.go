package main

import "fmt"

func main() {
	// var count int = 100
	// for i := 1; i < count; i++ {
	// 	if i%2 != 0 {
	// 		fmt.Printf("Hello %d\n", i)
	// 	}
	// }
	nums := []int{1, 2, 3, 4, 5}
	/*for i := 0; i < len(nums); i++ {
		fmt.Println(nums[i])
	}*/
	for _, element := range nums {
		fmt.Printf("Element: %d\n", element)
	}
	dj_matrix()
}

func dj_matrix() {
	matrix := [][]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}

	for _, row := range matrix {
		for _, col := range row {
			fmt.Printf("%d ", col)
		}
		fmt.Printf("\n")
	}
}
