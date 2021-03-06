/* eslint-disable no-unused-vars */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../components'
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled
} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';

function CardMedical({ value, label, color }) {
  return (
    <CardUI>
      <CardContentStyled color={color}>       
        <ValueStyled> <FontAwesomeIcon icon={faClinicMedical}/> {value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
        <div style={{fontSize:'20px', fontWeight:'bold', marginTop:'5%'}}>Bairros: 21</div>
        <div style={{fontSize:'20px', fontWeight:'bold', marginTop:'5%'}}>Penitenciárias: 0</div>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(CardMedical)