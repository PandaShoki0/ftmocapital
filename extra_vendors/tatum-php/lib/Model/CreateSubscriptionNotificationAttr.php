<?php

/**
 * CreateSubscriptionNotification_attr Model
 *
 * @copyright (c) 2022-2023 tatum.io
 * @license   MIT
 * @package   Tatum
 * @author    Mark Jivko
 * @link      https://tatum.io/
 *
 * NOTE: This class is auto-generated by tatum.io
 * Do not edit this file manually!
 */

namespace Tatum\Model;
!defined("TATUM-SDK") && exit();

/**
 * CreateSubscriptionNotification_attr Model
 * 
 * @description Additional attributes based on the subscription type.
 */
class CreateSubscriptionNotificationAttr extends AbstractModel {

    public const _D = null;
    public const CHAIN_SOL = 'SOL';
    public const CHAIN_ETH = 'ETH';
    public const CHAIN_MATIC = 'MATIC';
    public const CHAIN_CELO = 'CELO';
    public const CHAIN_KLAY = 'KLAY';
    public const CHAIN_BTC = 'BTC';
    public const CHAIN_LTC = 'LTC';
    public const CHAIN_BCH = 'BCH';
    public const CHAIN_DOGE = 'DOGE';
    public const CHAIN_TRON = 'TRON';
    public const CHAIN_BSC = 'BSC';
    protected static $_name = "CreateSubscriptionNotification_attr";
    protected static $_definition = [
        "address" => ["address", "string", null, "getAddress", "setAddress", null, ["r" => 1, "nl" => 13, "xl" => 128]], 
        "chain" => ["chain", "string", null, "getChain", "setChain", null, ["r" => 1, "e" => 1]], 
        "url" => ["url", "string", null, "getUrl", "setUrl", null, ["r" => 1, "xl" => 500]]
    ];

    /**
     * CreateSubscriptionNotificationAttr
     *
     * @param mixed[] $data Model data
     */
    public function __construct(array $data = []) {
        foreach(static::$_definition as $k => $v) {
            $this->_data[$k] = isset($data[$k]) ? $data[$k] : $v[5];
        }
    }

    /**
     * Get allowable values
     *
     * @return string[]
     */
    public function getChainAllowableValues(): array {
        return [
            self::CHAIN_SOL,
            self::CHAIN_ETH,
            self::CHAIN_MATIC,
            self::CHAIN_CELO,
            self::CHAIN_KLAY,
            self::CHAIN_BTC,
            self::CHAIN_LTC,
            self::CHAIN_BCH,
            self::CHAIN_DOGE,
            self::CHAIN_TRON,
            self::CHAIN_BSC,
        ];
    }

    /**
     * Get address
     *
     * @return string
     */
    public function getAddress(): string {
        return $this->_data["address"];
    }

    /**
     * Set address
     * 
     * @param string $address Blockchain address to watch.
     * @throws \InvalidArgumentException
     * @return $this
     */
    public function setAddress(string $address) {
        return $this->_set("address", $address);
    }

    /**
     * Get chain
     *
     * @return string
     */
    public function getChain(): string {
        return $this->_data["chain"];
    }

    /**
     * Set chain
     * 
     * @param string $chain Blockchain of the address.
     * @throws \InvalidArgumentException
     * @return $this
     */
    public function setChain(string $chain) {
        return $this->_set("chain", $chain);
    }

    /**
     * Get url
     *
     * @return string
     */
    public function getUrl(): string {
        return $this->_data["url"];
    }

    /**
     * Set url
     * 
     * @param string $url URL of the endpoint, where HTTP POST request will be sent, when transaction is detected on the address.
     * @throws \InvalidArgumentException
     * @return $this
     */
    public function setUrl(string $url) {
        return $this->_set("url", $url);
    }
}