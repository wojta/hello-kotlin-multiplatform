import hello_shared
import SwiftUI

let console=IosConsole()

struct ContentView: View {
    let sharedClass=SharedClass(console: console, math: Math())
    var body: some View {
        VStack {
            Text("Kotlin multiplatform iOS example")

            Button("Start") {
                sharedClass.platform="iOS"
                sharedClass.printMe()
                Task {
                    try await sharedClass.printPrimes(n: 1000)
                }
            }
            ScrollView {
                LazyVStack(alignment: HorizontalAlignment.leading) {
                    Observing(console.linesFlow) {
                        Text("Press start")
                    } content: { lines in
                        ForEach(lines.map { "\($0)" }, id: \.self) { it in
                            Text(it)
                        }
                    }
                }
                Spacer()
            }
        }.padding([.all], 16)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
