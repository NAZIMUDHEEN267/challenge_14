import { Component } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import bookSchema from "../schema/bookSchema";
import ShowContext from "../Context";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: 0,
            bookName: "",
            author: "",
            details: ""
        }

        this.handleClick = this.handleClick.bind(this);
    }

    static contextType = ShowContext;

    handleClick() {
        bookSchema.write(() => {
            bookSchema.create("Book", this.state)
        })

        this.context.callback({show: false});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="Id" onChangeText={(id) => this.setState({ ...this.state, _id: Number(id) })} />
                    <TextInput style={styles.input} placeholder="Book name" onChangeText={(name) => this.setState({ ...this.state, bookName: name })} />
                    <TextInput style={styles.input} placeholder="Author" onChangeText={(author) => this.setState({ ...this.state, author })} />
                    <TextInput style={{
                        borderWidth: 1,
                        width: "100%",
                        marginBottom: 10
                    }}
                        placeholder="Description about this book"
                        multiline numberOfLines={6}
                        onChangeText={(details) => this.setState({ ...this.state, details})}
                    />
                    <Button title="add to table"
                        onPress={this.handleClick}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        width: "80%",
        height: "80%",
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "100%",
        height: 50,
        paddingLeft: 10,
        borderWidth: 1,
        marginBottom: 10
    }
})