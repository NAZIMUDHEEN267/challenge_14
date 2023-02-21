import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react';
import { DataTable } from "react-native-paper";
import bookSchema from '../schema/bookSchema';
import ShowContext from '../Context';

export class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.setState({ data: bookSchema.objects("Book") || [] })
    }

    static contextType = ShowContext;

    render() {
        console.log(this.state.data);
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ padding: 10 }}>
                    <DataTable>
                        <DataTable.Header style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
                            <DataTable.Cell>Id</DataTable.Cell>
                            <DataTable.Cell>Name</DataTable.Cell>
                            <DataTable.Cell>Author</DataTable.Cell>
                            <DataTable.Cell>Details</DataTable.Cell>
                            <DataTable.Cell></DataTable.Cell>
                        </DataTable.Header>
                        {
                            this.state.data.map((book, index) => {
                                return (
                                    <DataTable.Row key={index}>
                                        <DataTable.Title>{book._id}</DataTable.Title>
                                        <DataTable.Title>{book.bookName}</DataTable.Title>
                                        <DataTable.Title>{book.author}</DataTable.Title>
                                        <DataTable.Title numberOfLines={9}>{book.details}</DataTable.Title>
                                        <DataTable.Title>
                                            <Button onPress={() => {
                                                bookSchema.write(() => {
                                                    bookSchema.delete(book);
                                                    this.setState({data: bookSchema.objects("Book")})
                                                })
                                            }} title="delete" color={"crimson"} />
                                        </DataTable.Title>
                                    </DataTable.Row>
                                )
                            })
                        }
                    </DataTable>

                </ScrollView>
                <TouchableOpacity
                    onPress={() => this.context.callback({ show: true })}
                    style={{ width: 60, height: 40, backgroundColor: "skyblue", justifyContent: "center", alignItems: "center", position: "absolute", bottom: "10%", right: "5%" }}
                >
                    <Text style={{ color: "#fff" }}>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Table