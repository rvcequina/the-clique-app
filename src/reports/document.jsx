import React, { useEffect, useState } from 'react';
import { Page, Text, Document, StyleSheet, View, Image, Line } from '@react-pdf/renderer';
import Logo from '@/assets/logo.png';
import RX from '@/assets/rx.png';



// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    height: '100vh',
    width: '100vw'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Times-Roman'
  },
  author: {
    fontSize: 12,

    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Times-Roman'
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },

  split: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  header_text: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Times-Roman'
  },
  header_sub: {
    fontSize: 18,
    fontFamily: 'Times-Roman'
  },
  horizontal: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  prescript: {
    minHeight: '15rem',
    marginBottom: 30,
    marginTop: 30,
    fontSize: 18,
    fontFamily: 'Times-Roman',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
  },
  result: {
    minHeight: '15rem',
    marginBottom: 30,
    marginTop: 30,
    fontSize: 18,
    fontFamily: 'Times-Roman',
    justifyContent: 'space-evenly',
    alignItems:'flex-start',
    display: 'flex',

    gap: '2rem',
  },
  signature: {
    fontSize: 18,
    fontFamily: 'Times-Roman',
    textAlign: 'right'
  },
  image_bot: {
    height: '5rem',
    width: '6rem'
  },
  image_top: {
    height: '5rem',
    width: '6rem'
  }


});

// Create Document Component
const MyDocument = ({ data }) => {
  const [details, setDetails] = useState()

  useEffect(() => {
    const getPatient = JSON.parse(localStorage.getItem('patient'));
    console.log(getPatient)
    setDetails(getPatient)
    console.log(data)
  }, [])

  return (

    <Document pageMode='fullScreen'>
      <Page wrap={false} size="A4" style={styles.body}>
        <View style={styles.split}>
          <View>
            <Text style={styles.header_text}>{details?.doctor.fullName}</Text>
            <Text style={styles.header_sub}>{details?.doctor.specialty}</Text>
          </View>
          <View>
            <Image style={styles.image_top} src={Logo} Buffer />
          </View>
        </View>

        <Text style={styles.subtitle}>
          License No. #####-#######
        </Text>
        <Text style={styles.text}>
          Patient Name: {details?.firstName} {details?.lastName}
        </Text>
        <View style={styles.horizontal}>
          <Text style={styles.text}>
            Gender: {details?.gender}
          </Text>
          <Text style={styles.text}>
            Age:  {new Date().getFullYear() - new Date(details?.dob).getFullYear()}
          </Text>
          <Text style={styles.text}>
            Date: {`${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`}
          </Text>
        </View>
        <hr />
        {
          data.dosage ?
            <View style={styles.prescript} break>
              <Text  >
                {data?.dosage ? '12' : ''}
              </Text>
              <Text  >
                {data?.name}
              </Text>
              <Text  >
                {data?.dosage}
              </Text>
            </View> : ''
        }
        {
          data.result ?
            <View style={styles.result} break>
              <View>
                <Text  >
                  {data?.name}
                </Text>
                <Text  >
                  {data?.description}
                </Text>
              </View>
              <Text  >
                {data?.result ? `Result: ${data.result}` : ''}
              </Text>
            </View> : ''
        }

        <hr />
        <View style={styles.signature}>
          <Image style={styles.image_bot} src={RX} Buffer />
          <Text>Signature</Text>
        </View>

      </Page>
    </Document>
  );
}

export default MyDocument