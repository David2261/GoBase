package main

import "fmt"

func main() {
	var alert string = "What's you name?"
	var name string
	var age uint8
	fmt.Println(alert)
	fmt.Scan(&name)
	fmt.Printf("Hello " + name + "!\n")
	fmt.Printf("How old are you?\n")
	fmt.Scan(&age)
	fmt.Printf("That is great " + fmt.Sprint(age) + " years\n")
}
